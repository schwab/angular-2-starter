import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
// selector specifies the css class 
// to which the template will be added
@Component({
    selector: "courses",
    template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow/>
    <ul>
        <li *ngFor="#course of courses">
        {{ course }}
        </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent{
    title="The title of courses page";
    courses ;
    constructor(courseService:CourseService){
        this.courses = courseService.getCourses();
    }
    // Don't do this, since it's tight coupled
    /*
    constructor(){
        new CourseService();
    }*/
}