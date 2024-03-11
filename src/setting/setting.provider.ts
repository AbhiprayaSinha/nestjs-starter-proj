import { Setting } from "src/setting/setting.model";

export const settingProvider = [
    {
        provide: "SETTING_REPOSITORY",
        useValue: Setting,
    },
];