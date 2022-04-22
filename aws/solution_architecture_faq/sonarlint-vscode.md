# SonarLint for VS Code

We use SonarQube as our static code analysis tool. It is typically built into our CI/CD processes and provides feedback to the teams as the build is happening.

This provides good information however, the feedback loop can be too slow for rapid development.

Fortunately, when it comes to [SonarQube](https://www.sonarqube.org/), they also provide [SonarLint](https://www.sonarlint.org/), which can be configured directly into your IDE to give that true shift-left mentality.

Follow the steps below for how to configure SonarLint locally in [VS Code](https://code.visualstudio.com/).

## Requirements

To get started you will need

* A [SonarQube](https://www.sonarqube.org/) server.
* [VS Code](https://code.visualstudio.com/) installed

## Installation & Global Configuration

Open up VS Code and under extensions install `SonarLint`

![image](https://user-images.githubusercontent.com/17270996/164645251-5d76c33c-b225-4aba-83f8-4f572b7dc2a4.png)

Once installed, restart or reload VS Code to ensure it's taken effect.

If SonarLint can't detect a JAVA JRE on your system, it will prompt you to download one. Let it download if required.

Once VS Code is up and running again, hit `Ctrl + Shift + P` to open the command palette. Then enter `Preferences: Open Settings (JSON)` and select to open up your settings.

To get SonarLint working, you need to specify the following settings.

```json
"sonarlint.connectedMode.connections.sonarqube": [
    {
        "connectionId": "sonar", // id of your sonarqube server
        "serverUrl": "https://ccq.svc.oneadvanced.com/", // url of your sonarqube server
        "token": "XXXX" // token to authenticate with sonarqube
    }

],
"sonarlint.pathToNodeExecutable": "C:\\\\Program Files\\\\nodejs\\\\node.exe", // path to your node.js installation if analyzing JavaScript/Typescript
```

To generate the token, you will need to:

* Login to your SonarQube server
* Click on your profile picture on the top right-hand side of the page and select `My Account`

* Next select `Security`, specify a token name and hit generate

![image](https://user-images.githubusercontent.com/17270996/164645509-43f7d350-7a56-4b63-8107-0e23d8a2ea31.png)


![image](https://user-images.githubusercontent.com/17270996/164645465-fb652413-172f-4af1-beb4-a11146a3a422.png)


* Your token will be displayed

![image](https://user-images.githubusercontent.com/17270996/164645592-058f4c79-72e5-4da6-9afc-daf9e0e5d40d.png)


* Copy your token and paste this into the above `token` setting in VS Code

SonarLint is now configured globally within VS Code to access SonarQube via the specified `connectionId`.

## Workspace Configuration

Next, we need to configure your project workspace to allow it to scan the appropriate SonarQube project.

Go back onto your SonarQube server (<https://ccq.svc.oneadvanced.com/>) and grab the project key.

This can be found on the project page on the bottom right of the page.

![image](https://user-images.githubusercontent.com/17270996/164645709-510c9c60-f8e5-45c7-a72e-8c1212f1e7c7.png)


In VSCode hit `Ctrl + Shift + P` to open the command palette. Then enter `Preferences: Open Workspace Settings (JSON)` and select to open up your workspace settings.

To get SonarLint working, you need to specify the following settings.

```json
{
  "sonarlint.connectedMode.project": {
    "connectionId": "sonar", // should be same connectionId you defined above
    "projectKey": "XXXX" // Replace with project key you grabbed from SonarQube server
  }
}
```

We now need to update the SonarLint bindings for the workspace to ensure the rules are in-sync locally and on the server.

Again, hit `Ctrl + Shift + P` to open the command palette. Then enter `SonarLint: Update all bindings to SonarQube/SonarCloud` and select. You should see the following message on the bottom right of VS Code once complete.

![image](https://user-images.githubusercontent.com/17270996/164645823-b69cab72-5790-4196-98cf-0da6611c52b6.png)

The project should now be connected and configured.

## Verifying

You can verify this by opening up a file that has some problems.

These will now be highlighted within your code:

* With an underline that shows a popup of the issue when hovered over

![image](https://user-images.githubusercontent.com/17270996/164645882-44af3265-4402-42ec-be1e-a412af397b7a.png)

 * Within the VS Code problems panel

![image](https://user-images.githubusercontent.com/17270996/164645966-ccd7325b-9f03-4796-b951-c1d7939967f7.png)

You have achieved true shift-left and now have a fast feedback loop allowing you to resolve any SonarQube issues as you code.
