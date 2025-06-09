import React, { createContext, useContext, useState, useEffect } from 'react';
import { Confetti } from 'react-confetti';

export const RewardsContext = createContext();

const BADGES = {
  EARLY_BIRD: {
    name: 'Early Bird',
    description: 'Complete 10 morning walks before 8 AM',
    points: 500,
    icon: 'sunrise',
  },
  SUPER_WALKER: {
    name: 'Super Walker',
    description: 'Complete 100 walks',
    points: 1000,
    icon: 'running',
  },
  SOCIAL_BUTTERFLY: {
    name: 'Social Butterfly',
    description: 'Get 50 likes on your walks',
    points: 300,
    icon: 'users',
  },
  LOYAL_USER: {
    name: 'Loyal User',
    description: 'Use the app for 30 days',
    points: 750,
    icon: 'star',
  },
};

const LEVELS = [
  { name: 'Puppy Walker', minPoints: 0, maxPoints: 1000 },
  { name: 'Regular Walker', minPoints: 1000, maxPoints: 5000 },
  { name: 'Power Walker', minPoints: 5000, maxPoints: 15000 },
  { name: 'Master Walker', minPoints: 15000 },
];

export const RewardsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(LEVELS[0]);
  const [badges, setBadges] = useState([]);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [dailyTasks, setDailyTasks] = useState({
    walk: false,
    review: false,
    social: false,
    challenge: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth().currentUser;
        if (!user) return;

        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();

        if (userDoc.exists) {
          const userData = userDoc.data();
          setPoints(userData.points || 0);
          setBadges(userData.badges || []);
          setDailyStreak(userData.dailyStreak || 0);
          setDailyTasks(userData.dailyTasks || {});
          updateLevel(userData.points || 0);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const updateLevel = (currentPoints) => {
    const newLevel = LEVELS.find((level, index) => {
      if (index === LEVELS.length - 1) {
        return currentPoints >= level.minPoints;
      }
      return currentPoints >= level.minPoints && currentPoints < level.maxPoints;
    }) || LEVELS[0];

    setLevel(newLevel);
  };

  const addPoints = async (pointsToAdd, activity) => {
    try {
      const user = auth().currentUser;
      if (!user) return;

      // Update points
      const newPoints = points + pointsToAdd;
      setPoints(newPoints);
      updateLevel(newPoints);

      // Check for badge achievements
      checkBadges(activity);

      // Update daily streak
      updateStreak(activity);

      // Update daily tasks
      updateDailyTasks(activity);

      // Save to Firestore
      await firestore()
        .collection('users')
        .doc(user.uid)
        .set({
          points: newPoints,
          badges,
          dailyStreak,
          dailyTasks,
          lastActivity: firestore.FieldValue.serverTimestamp(),
        }, { merge: true });

      // Trigger confetti animation
      triggerConfetti();
    } catch (error) {
      console.error('Error adding points:', error);
    }
  };

  const checkBadges = (activity) => {
    const newBadges = [...badges];
    
    // Check for Early Bird badge
    if (activity === 'walk' && new Date().getHours() < 8) {
      const morningWalks = newBadges.filter(b => b.type === 'EARLY_BIRD').length;
      if (morningWalks < 10) {
        newBadges.push({
          type: 'EARLY_BIRD',
          timestamp: new Date(),
        });
      }
    }

    // Check for Super Walker badge
    if (activity === 'walk') {
      const totalWalks = newBadges.filter(b => b.type === 'SUPER_WALKER').length;
      if (totalWalks < 100) {
        newBadges.push({
          type: 'SUPER_WALKER',
          timestamp: new Date(),
        });
      }
    }

    setBadges(newBadges);
  };

  const updateStreak = (activity) => {
    if (activity === 'walk') {
      const today = new Date().setHours(0, 0, 0, 0);
      const lastActivity = new Date(dailyStreak * 1000);
      const lastDay = lastActivity.setHours(0, 0, 0, 0);

      if (today - lastDay <= 24 * 60 * 60 * 1000) {
        setDailyStreak(dailyStreak + 1);
      } else {
        setDailyStreak(1);
      }
    }
  };

  const updateDailyTasks = (activity) => {
    const newTasks = { ...dailyTasks };
    if (activity === 'walk') {
      newTasks.walk = true;
    }
    if (activity === 'review') {
      newTasks.review = true;
    }
    if (activity === 'social') {
      newTasks.social = true;
    }
    if (activity === 'challenge') {
      newTasks.challenge = true;
    }
    setDailyTasks(newTasks);
  };

  const triggerConfetti = () => {
    return (
      <ConfettiCannon
        count={200}
        origin={{ x: Dimensions.get('window').width / 2, y: 0 }}
        autoStart
      />
    );
  };

  const deductPoints = async (pointsToDeduct) => {
    try {
      const user = auth().currentUser;
      if (!user) return;

      // Update points
      const newPoints = points - pointsToDeduct;
      setPoints(newPoints);
      updateLevel(newPoints);

      // Save to Firestore
      await firestore()
        .collection('users')
        .doc(user.uid)
        .set({
          points: newPoints,
          lastActivity: firestore.FieldValue.serverTimestamp(),
        }, { merge: true });
    } catch (error) {
      console.error('Error deducting points:', error);
      throw error;
    }
  };

  const value = {
    points,
    level,
    badges,
    dailyStreak,
    dailyTasks,
    addPoints,
    deductPoints,
    loading,
  };

  return (
    <RewardsContext.Provider value={value}>
      {children}
    </RewardsContext.Provider>
  );
};

export const useRewards = () => {
  const context = useContext(RewardsContext);
  if (!context) {
    throw new Error('useRewards must be used within a RewardsProvider');
  }
  return context;
};

export default RewardsContext;
