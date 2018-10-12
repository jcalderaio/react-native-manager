# Jitsi Meet apps for Android and iOS

Jitsi Meet can also be built as a standalone app for Android or iOS. It uses the
[React Native] framework.

**NOTE**: This document assumes the app is being built on a macOS system.

## 1) First make sure the [React Native dependencies] are installed.

## 2) Install nvm and Node (make sure to do this step BEFORE running 'npm install'. If your machine's node version is different than we recommend, you may get errors)

  We recommend you use nvm. With it, you can easily manage different node versions on the same machine.

  - To install nvm, you can use the install script using cURL:

  ```bash
  $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```

  - Use nvm to install Node. 
  
  ```
  $ nvm install 6.14.2
  ```

  - OR, if you want to install Node w/ nvm AND migrate npm packages from a previous Node version:

  ```
  $ nvm install 6.14.2 --reinstall-packages-from=${OLD_NODE_VERSION}
  ```

## 3) .nvmrc

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

  - Shut down and reopen terminal, and cd into project's root directory. You should see the following output:

  ```
  $ Found '/Users/Johnny/Desktop/synzi2-jisti-meet-sandbox/.nvmrc' with version <6.14.2>. Now using node v6.14.2 (npm v3.10.10)
  ```

  - If you don't see this, delete the code from ~/.bash_profile, and try ~/.bashrc or ~/.zshrc.

  - Confirm you are using Node version 6.14.2 before moving ahead:
  ```
  node --version
  ```


## 4) iOS

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
    pod update
    ```

    **Note, you may get errors related to CocoaPods. It could look like the following:

    ```
    [!] Failed to connect to GitHub to update the CocoaPods/Specs specs repo - Please check if you are offline, or that GitHub is down
    ```
    
  - If you get no errors, move to step 2 (Build the app). Else, follow the steps below:

  - To solve this, we are going to have to update openssl, then ruby, then CocoaPod

  ```
  $ which openssl
  /usr/bin/openssl

  $ openssl version
  OpenSSL 0.9.8zh 14 Jan 2016

  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  $ brew update

  $ brew install openssl

  $ brew upgrade openssl

  If you need to have this software first in your PATH run: echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

  $ echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile
  $ source ~/.bash_profile

  $ which openssl
  /usr/local/opt/openssl/bin/openssl

  $ openssl version
  OpenSSL 1.0.2n  7 Dec 2017

  $ brew install rbenv ruby-build

  $ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
  $ echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
  $ source ~/.bash_profile

  $ rbenv install --list

  Available versions:
    1.8.5-p52
    1.8.5-p113
    1.8.5-p114
    1.8.5-p115  
    1.8.5-p231
    1.8.6
  :
    2.5.0-rc1
    2.5.0
    2.5.1
    2.6.0-dev
  :

  $ rbenv install 2.5.1

  $ rbenv versions
  * system (set by /Users/username/.rbenv/version)
  2.5.1

  $ ruby --version
  ruby 2.0.0p648 (2015-12-16 revision 53162) [universal.x86_64-darwin16]

  $ rbenv global 2.5.1

  $ rbenv versions
    system
  * 2.5.1 (set by /Users/username/.rbenv/version)

  $ ruby --version
  ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin16]

  $ gem install cocoapods -n /usr/local/bin

  $ which pod
  /usr/local/bin/pod

  $ pod --version
  1.5.3
  ```

  - Once you have followed these steps run "pod update" again in the root/ios directory. If no errors, move ahead!
  

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
