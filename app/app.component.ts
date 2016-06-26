import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
// must explicitlty reference the component to use via "directive"
// AppCompoent is the root of the appliation
@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <courses></courses>
    <authors></authors>
    <div (click) = "onDivClick()">
    <button (click)="onClick($event)">Submit</button>
    <button on-click="onClick()">Submit</button>
    </div>
    `,
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent { 
    // $event is the DOM element
    onClick($event){ console.log("Clicked", $event);
    $event.stopPropagation();
}
    onDivClick(){console.log("Handled by Div");}
}