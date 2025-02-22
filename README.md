# 248-Project
# Volleyball Event Management System

## Overview

The Volleyball Event Management System is a full-stack web platform designed to manage volleyball events. The system supports user registration (with profile images), team creation and management (with a six-player cap per team), and event scheduling with key details such as location, time, price (per team or per individual), and event skill level (e.g., AA, A, BB, B, C). Users can browse events publicly, but must register to participate, while administrators have control over event creation, cancellations, and participant management (including the ability to remove users or teams).

## Core Functionalities

- **User Management:**
  - Registration, login, and profile management (with image uploads).
- **Event Management:**
  - Admins can create and list events with details like location, time, price, and skill level.
  - Public event listings are available for all users.
- **Team Management:**
  - Users can sign up either individually or as part of a team (with a six-player cap per team).
- **Administrative Controls:**
  - Admins can cancel events and remove (kick) users or teams from events.

## Technologies

- **Backend:**
  - Node.js with Express – a fast, lightweight, and scalable server framework.
- **Database:**
  - SQL (PostgreSQL or MySQL) – ideal for managing structured, relational data such as users, events, and teams.
- **Frontend:**
  - React – for building a dynamic and responsive UI.
  - CSS Frameworks like Tailwind CSS or Bootstrap – for rapid and consistent styling.

## Methodology

This project will be developed using an Agile approach, broken into 2-week sprints. The development will focus on core functionalities first (such as user authentication and event listing) before gradually adding team management and administrative features.

### Example User Stories

- *As a user, I want to register and upload my profile picture so that I can participate in events.*
- *As a user, I want to browse upcoming volleyball events without needing to log in, but must sign up to join an event.*
- *As a team captain, I want to create a team or join an existing team (with a six-player cap) for an event.*
- *As an admin, I want to create events with detailed information and have the ability to cancel events or remove users if necessary.*

## Estimated Time Breakdown

**Total Estimated Hours: ~250 hours**

1. **Planning & Setup (≈25 hours)**
   - Requirements & Project Planning: 8 hours
   - Agile Setup & Documentation: 5 hours
   - Environment Setup (Node.js, Express, SQL setup): 7 hours
   - Initial Wireframes & UI Mockups: 5 hours

2. **Backend Development (≈80 hours)**
   - User Management APIs: 20 hours
   - Event Management APIs: 20 hours
   - Team Management APIs: 15 hours
   - Simplified Administrative APIs: 10 hours
   - Testing & Debugging (Backend): 15 hours

3. **Database Design & Integration (≈30 hours)**
   - Schema Design (Users, Events, Teams): 12 hours
   - Database Setup & Migration Scripts: 10 hours
   - Integration & Optimization: 8 hours

4. **Frontend Development (≈80 hours)**
   - UI/UX Design & Prototyping: 20 hours
   - Core Pages Development (Home/Welcome, Dashboard, Event Listing): 30 hours
   - Team & Event Detail Pages: 20 hours
   - Frontend Integration with API Consumption: 10 hours

5. **Testing, Deployment & Documentation (≈30 hours)**
   - Integration Testing: 20 hours
   - Documentation: 5 hours
   - Deployment & Final Polishing: 5 hours

6. **Project Management & Buffer (≈15 hours)**
   - Agile Meetings & Progress Tracking: 8 hours
   - Contingency & Bug Fixes: 7 hours
