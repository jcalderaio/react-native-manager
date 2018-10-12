# Jitsi Meet apps for Android and iOS

Jitsi Meet can also be built as a standalone app for Android or iOS. It uses the
[React Native] framework.

##First make sure the [React Native dependencies] are installed.

## Install nvm and Node (make sure to do this step BEFORE running 'npm install'. If your machine's node version is different than we recommend, you may get errors)

  We recommend you use nvm. With it, you can easily manage different node versions on the same machine.

  -To install nvm, you can use the install script using cURL:

  ```bash
  $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```

  -Use nvm to install Node. 
  
  ```
  $ nvm install 6.14.2
  ```

  -OR, if you want to install Node w/ nvm AND migrate npm packages from a previous Node version:

  ```
  $ nvm install 6.14.2 --reinstall-packages-from=${OLD_NODE_VERSION}
  ```

## .nvmrc

 A .nvmrc file is included in this project's root directory. We will make it so that upon changing into this project's root directory, your machine will automatically switch to Node version 6.14.2

 Place the following code in your ~/.bashrc or ~/.bash_profile:

  ```
  # Run 'nvm use' automatically every time there's 
  # a .nvmrc file in the directory. Also, revert to default 
  # version when entering a directory without .nvmrc

  enter_directory() {
    if [[ $PWD == $PREV_PWD ]]; then
      return
    fi

  PREV_PWD=$PWD
    if [[ -f ".nvmrc" ]]; then
      nvm use
    fi
  }

  export PROMPT_COMMAND=enter_directory
  ```

  Shut down and reopen terminal, and point it to this projects root directory. You should see the following output:

  ```
  $ Found '/Users/Johnny/Desktop/synzi2-jisti-meet-sandbox/.nvmrc' with version <6.14.2>. Now using node v6.14.2 (npm v3.10.10)
  ```

  If not, delete the code from ~/.bash_profile, and try ~/.bashrc or ~/.zshrc



**NOTE**: This document assumes the app is being built on a macOS system.


## iOS

1. Install some extra dependencies

  - Install ios-deploy globally (in case you want to use the React Native CLI
    to deploy the app to the device)

    ```bash
    npm install -g ios-deploy
    ```

    You may need to add ```--unsafe-perm=true``` if you are running on [Mac OS 10.11 or greater](https://github.com/phonegap/ios-deploy#os-x-1011-el-capitan-or-greater).

  - Install main dependencies:

    ```bash
    npm install
    ```

  - Install the required pods (CocoaPods must be installled first, it can
    be done with Homebrew: `brew install cocoapods`)

    ```bash
    cd ios
    pod install
    cd ..
    ```

2. Build the app

    There are 2 ways to build the app: using the CLI or using Xcode.

    Using the CLI:

    ```bash
    react-native run-ios --device
    ```

    When the app is launched from the CLI the output can be checked with the
    following command:

    ```bash
    react-native log-ios
    ```

    Using Xcode

    - Open **ios/jitsi-meet.xcworkspace** in Xcode. Make sure it's the workspace
      file!

    - Select your device from the top bar and hit the "play" button.

    When the app is launched from Xcode the Debug console will show the output
    logs the application creates.


3. Other remarks

    It's likely you'll need to change the bundle ID for deploying to a device
    because the default bundle ID points to the application signed by Atlassian.

    This can be changed in the "General" tab.  Under "Identity" set
    "Bundle Identifier" to a different value, and adjust the "Team" in the
    "Signing" section to match your own.


## Android

The [React Native dependencies] page has very detailed information on how to
setup [Android Studio] and the required components for getting the necessary
build environment.  Make sure you follow it closely.

1. Building the app

    The app can be built using the CLI utility as follows:

    ```bash
    react-native run-android
    ```

    It will be launched on the connected Android device.

## Debugging

The official documentation on [debugging] is quite extensive and specifies the
preferred method for debugging.

**NOTE**: When using Chrome Developer Tools for debugging the JavaScript source
code is being interpreted by Chrome's V8 engine, instead of JSCore which React
Native uses. It's important to keep this in mind due to potential differences in
supported JavaScript features.

[Android Studio]: https://developer.android.com/studio/index.html
[debugging]: https://facebook.github.io/react-native/docs/debugging.html
[React Native]: https://facebook.github.io/react-native/
[React Native dependencies]: https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies
