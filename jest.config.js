module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation)/)',
  ],
  moduleNameMapper: {
    'lucide-react-native': '<rootDir>/__mocks__/lucide-react-native.js',
    'react-native-linear-gradient':
      '<rootDir>/__mocks__/react-native-linear-gradient.js',
    'react-native-vector-icons/Ionicons':
      '<rootDir>/__mocks__/react-native-vector-icons-ionicons.js',
  },
};
