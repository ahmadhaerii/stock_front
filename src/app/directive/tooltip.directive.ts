import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText: string = '';
  @Input('appTooltipHelperPosition') tooltipPosition: TooltipPosition = 'top';
  
  tooltipElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tooltipText.length == 0 ) {
     return ; 
    }
    this.tooltipElement = this.renderer.createElement('span');
    const rect = this.el.nativeElement.getBoundingClientRect();

    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.tooltipText)
    );
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background', '#333');
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '4px 8px');
    this.renderer.setStyle(this.tooltipElement, 'height', 'fit-content');
    this.renderer.setStyle(this.tooltipElement, 'borderRadius', '4px');
    // this.renderer.setStyle(this.tooltipElement, 'top', `8px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `48px`);
    this.renderer.setStyle(this.tooltipElement, 'width', `max-content`);
    this.renderer.setStyle(this.tooltipElement, 'font-size', `small`);
    this.renderer.setStyle(this.tooltipElement, 'font-size', `small`);
    this.renderer.setStyle(this.tooltipElement, 'user-select', `none`);
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);

    const margin = 0;

    if (this.tooltipElement) {
      const tRect = this.tooltipElement.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (this.tooltipPosition) {
        case 'top':
          top = rect.top - tRect.height - margin;
          left = rect.left + rect.width / 2 - tRect.width / 2;
          break;

        case 'bottom':
          top = rect.bottom + margin;
          left = rect.left + rect.width / 2 - tRect.width / 2;
          break;

        case 'left':
          top = rect.top + rect.height / 2 - tRect.height / 2;
          left = rect.left - tRect.width - margin;
          break;

        case 'right':
          top = rect.top + rect.height / 2 - tRect.height / 2;
          left = rect.right + margin;
          break;
      }

      // this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
      // this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);

      this.renderer.setStyle(this.tooltipElement, 'bottom', `${-28}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${0}px`);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'position');
     if (!this.tooltipElement) return;
     this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
  }
}
