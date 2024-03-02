// Start package

// Define the Module interface
interface Module {
    action: (token: string, locale: string) => void;
}

// Define the modules array and message variables
let modules: Module[] = [];
let message: string = "";

// RegisterModule registers the given module in the array
function registerModule(module: Module) {
    modules.push(module);
}

// SetMessage registers the message which will be sent to the client
function setMessage(_message: string) {
    message = _message;
}

// GetMessage returns the messages that needs to be sent
function getMessage(): string {
    return message;
}

// ExecuteModules will execute all the registered start modules with the user token
function executeModules(token: string, locale: string) {
    console.log("Executing start modules..");

    for (const module of modules) {
        module.action(token, locale);
    }
}
