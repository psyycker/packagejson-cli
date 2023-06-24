import {removeScript} from "./script-handler";

type Types = 'script' | unknown

const handleRemove = (parameters: string[]) => {
    const [type, ...args] = parameters;
    switch (type) {
        case 'script':
            removeScript(args[0]);
            break;
        default:
            throw new Error(`Unknown type: ${type}`);
    }
};

export default handleRemove;
