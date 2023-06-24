import fs from "fs";

export interface PackageJson {
    name: string;
    version: string;
    description?: string;
    main?: string;
    scripts?: Record<string, string>;
    keywords?: string[];
    author?: string;
    license?: string;
    devDependencies?: Record<string, string>;
    dependencies?: Record<string, string>;
    engines?: {
        node?: string;
    };
}

export const readPackageJson = (): PackageJson => {
    return JSON.parse(fs.readFileSync('package.json', 'utf8'));
}

export const writePackageJson = (packageJson: PackageJson) => {
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}
