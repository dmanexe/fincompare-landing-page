# FinCompare Landing Page

For James @ FinCompare

# Installation
Clone git repository, then go to `/`  and run the following:

    npm install
    npm run-script build

# Get 'er done
Considering a successful `install` and `build`, you've got webpack ready to serve up. Since we're using `babel`, we must use that `bin` to get this thing live. Run this to launch the server and access the landing page at http://localhost:3000 unless you have strange localhost settings. I tried to leave this as vanilla as possible.

    npm run-script start
    
Alternatively, if you are using `foreverjs` you could use the following command:

    forever start --minUptime 5000 --spinSleepTime 2000 -c "npm run start" ./

# Help / Support

Author: Daniel Birlem
Email: dman.exe@gmail.com
Skype: danbirlem
