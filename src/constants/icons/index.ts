import _ from "lodash";

import { socialMediaIcons, SocialMediaIcons } from "./social-media";
import { MobileMenuIcons, mobileMenuIcons } from "./mobile-menu";

export const ICONS_ENUM = _.assign({}, SocialMediaIcons, MobileMenuIcons);
export default _.assign({}, socialMediaIcons, mobileMenuIcons);
