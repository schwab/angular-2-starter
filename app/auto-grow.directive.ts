import {Directive, ElementRef, Renderer} from 'angular2/core'
// ElementRef service gives access the host element 
// Renderer service used to modify an element
@Directive({
    // square brackets selectors refer to attributes
    // "(focus)" <- binding to the focus event
    selector:'[autoGrow]',
    host:{
        '(focus)':'onFocus()',
        '(blur)' : 'onBlur()'
    }
})
export class AutoGrowDirective{
   // _el: ElementRef;
   // private keyword takes care of creating the property for us.
    constructor(private el:  ElementRef, private renderer : Renderer)
    {
     //   this._el = el;
    }
    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement,'width','200');
    }
    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement,'width','120');
    }
}