import {addScript} from "./script-handler";

type Types = 'script' | unknown

const handleAdd = (parameters: string[]) => {
    const [type, ...args] = parameters;
    switch (type) {
        case 'script':
            addScript(args);
            break;
        default:
            throw new Error(`Unknown type: ${type}`);
    }
};

export default handleAdd;
