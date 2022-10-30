import React from 'react';
import FreeCourses from './FreeCourses';
import SchoolCollege from './SchoolCollege';
import SkillDevlopment from './SkillDevlopment';
import TrendingCourses from './TrendingCourses';

const AllCourses = () => {
    return (
        <div>
            <FreeCourses></FreeCourses>
            <SchoolCollege></SchoolCollege>
            <SkillDevlopment></SkillDevlopment>
            <TrendingCourses></TrendingCourses>
          
        </div>
    );
};

export default AllCourses;