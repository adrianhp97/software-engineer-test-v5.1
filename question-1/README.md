# Problem
An owner of a boutique hotel asked you to develop a program to help him assign
available rooms to his guests. Your program must find the nearest available room
measured by the route taken from the entrance to the room (see diagram) and assign it
to the guest. Given that:
- The hotel has 4 floors and there are 5 rooms on each floor
- Rooms are numbered by the floor as prefix followed by a single alphabet suffix A, B, C, D or E where A is the first room (relative to the entrance) until E for the last room.
- There are 4 room statuses Available, Occupied, Vacant or Repair as follows:
  - Only `Available` rooms can be assigned to guests which will then become `Occupied`
  - After the guest checks out of the room, the room become `Vacant`
  - If houskeeping cleans a `Vacant` room, it becomes `Available`
  - Housekeeping may take a `Vacant` room for repairs by marking the room as `Repair`
  - Once room is repaired, it will become `Vacant` again for cleaning
  - Rooms under repair can only be made `Vacant`
  - `Available` and `Occupied` rooms cannot be repaired

# Tools Required
- Node installed (I use Node v16)
  
# Project Structure
```
/src
  - boutique.d.ts
  - boutique.ts
  - room.d.ts
  - room.ts
  - main.ts
/tests
  - boutique.spec.ts
  - room.spec.ts
  - main.spec.ts
jest.config.js
package.json
README.md
```
The `/src` folder where all the code and definition is placed. All the test case is placed in `/tests` folder.

# Installation
1. Open bash terminal
2. Run `npm install` file

# Run project
1. Open bash terminal
2. Run `npm start`
