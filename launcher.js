const { spawn } = require("cross-spawn");

function startServer(name, command, cwd) {
    console.log(`Starting ${name}...`);

    // Run npm install first
    const installProcess = spawn("npm", ["install"], { shell: true, cwd, stdio: "inherit" });

    installProcess.on("close", (installCode) => {
        if (installCode === 0) {
            // After successful installation, open a new terminal window to start the server
            const startProcess = spawn("start", ["cmd", "/c", "npm start"], { shell: true, cwd });

            startProcess.on("close", (startCode) => {
                console.log(`${name} exited with code ${startCode}`);
            });
        } else {
            console.error(`${name} failed to install dependencies.`);
        }
    });
}

// Define the paths to your API and Server
const apiPath = "./GameLauncherAPI";
const serverPath = "./GameLauncherServer";

// Start both servers in separate terminals
startServer("GameLauncher API", "npm start", apiPath);
startServer("GameLauncher Server", "npm start", serverPath);
