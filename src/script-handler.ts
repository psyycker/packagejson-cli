import {readPackageJson, writePackageJson} from "./package-json-io";

export const addScript = ([name, ...value]: string[]) => {
    const scriptValueJoined = value.join(' ');
    const packageJson = readPackageJson()
    if (packageJson.scripts === undefined) {
        packageJson.scripts = {};
    }
    // TODO check if script already exists and ask for confirmation
    packageJson.scripts[name] = scriptValueJoined;
    writePackageJson(packageJson)
}

export const removeScript = (name: string) => {
    const packageJson = readPackageJson()
    if (packageJson.scripts === undefined) {
        throw new Error(`No script named ${name} found in package.json`)
    }
    delete packageJson.scripts[name];
    if (Object.keys(packageJson.scripts).length === 0) {
        delete packageJson.scripts;
    }
    writePackageJson(packageJson)
}
