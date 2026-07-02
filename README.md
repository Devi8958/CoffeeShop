This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Coffee Shop

A modern Coffee Shop mobile application built using React Native and TypeScript following scalable architecture, reusable components, clean code practices, and Context API state management.

---

## Features

- Splash Screen using React Native BootSplash
- Home Screen
- Coffee Details Screen
- Order Screen
- Delivery Tracking Screen
- Notification Screen
- Search Coffee
- Category Filtering
- Favorite / Unfavorite Coffee
- Dynamic Price Calculation
- Quantity Increment / Decrement
- Read More / Read Less Description
- Reusable Components
- Context API State Management
- Mock REST API Integration
- TypeScript Support

---

## Tech Stack

- React Native
- TypeScript
- React Navigation
- Context API
- React Native BootSplash
- Fetch API
- Mock API
- Functional Components
- React Hooks

---

## Project Structure

src
├── api
├── assets
│ ├── fonts
│ ├── icons
│ └── images
├── components
├── constants
├── context
├── hooks
├── navigation
├── screens
├── services
├── types
└── utils

---

## Architecture

API
↓
Services
↓
Context API
↓
Custom Hooks
↓
Screens
↓
Reusable Components

---

## State Management

The application uses Context API to manage shared state across the application.

Managed States:

- Coffee List
- Categories
- Search
- Selected Category
- Favorite Coffees
- Loading State
- Error State

---

## Reusable Components

- AppHeader
- AppButton
- AppIcon
- SearchBar
- PromoBanner
- CoffeeCard
- CategoryChip

---

## Performance Optimizations

- React.memo
- useMemo
- useCallback
- Separation of UI and Business Logic
- Shared Constants
- Shared Colors
- Shared Fonts
- Shared Types
- Reusable Components
- Context API to prevent unnecessary API calls

---

## Error Handling

- API Error Handling
- Loading Indicators
- Empty States
- Retry Mechanism
- Safe Navigation
- Optional Chaining
- Null Checks

---

## Installation

git clone <repository-url>

cd CoffeeShop

npm install

---

## Run Android

npx react-native run-android

---

## Run iOS

cd ios

pod install

cd ..

npx react-native run-ios

---

## Generate BootSplash

npx react-native-bootsplash generate src/assets/images/splash.png --background=000000 --logo-width=180

---

## Screens

- Splash
- Home
- Coffee Details
- Order
- Delivery Tracking
- Notifications

---

## Future Enhancements

- Authentication
- Cart Management
- Payment Gateway Integration
- Push Notifications
- Real-time Delivery Tracking
- Google Maps Integration
- Dark Mode
- Offline Support
- Order History
- Profile Management

---

## Design Principles Followed

- Clean Architecture
- Separation of Concerns
- Component Reusability
- Single Responsibility Principle
- Modular Folder Structure
- Type Safety using TypeScript
- Centralized Constants
- Centralized Colors
- Centralized Assets
- Custom Hooks for Business Logic
- Context API for Shared State

---

## Project Highlights

- Built completely using Functional Components.
- Used Context API for centralized state management.
- UI and business logic are separated.
- Reusable components are created for common UI.
- Dynamic data loaded from Mock API.
- Implemented reusable AppHeader, AppButton, AppIcon and other shared components.
- Optimized rendering using React.memo, useMemo and useCallback.
- Centralized constants, colors, fonts and assets for better maintainability.
- Implemented scalable folder structure suitable for production-level applications.

---

## License

MIT License
