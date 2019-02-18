import React from 'react';

import TabLayout from '../../layouts/TabLayout';
import { courseDetailsTabsConfig as tabsConfig } from './fixtures';

const CourseDetails = () => <TabLayout {...{ tabsConfig }} />;

export default CourseDetails;
