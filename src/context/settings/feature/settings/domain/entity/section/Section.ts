import { Setting } from "../setting/Setting";
import { SectionKey } from "./SectionKey";

export interface Section {
    heading: string,
    key: SectionKey,
    settings: Setting[],
}
