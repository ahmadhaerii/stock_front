import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  isMenuSelect = false;
  ngAfterViewInit(): void {
    const resize = document.getElementById('dragMe');
    if (!resize) {
      return;
    }
    const leftSide = document.getElementById('leftSide');
    const rightSide = document.getElementById('rightSide');
    if (!leftSide) {
      return;
    }
    if (!rightSide) {
      return;
    }
    let x = 0;
    let y = 0;
    let leftWidth = 0;
    const mouseDownHandler = function (e: {
      clientX: number;
      clientY: number;
    }) {
      x = e.clientX;
      y = e.clientY;
      leftWidth = leftSide ? leftSide.getBoundingClientRect().width : 0;
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e: {
      clientX: number;
      clientY: number;
    }) {
      const dx = e.clientX - x;
      const dy = e.clientY - y;

      const width = resize.parentElement?.getBoundingClientRect().width;
      if (!width) {
        return;
      }
      let newLeftWidth = ((leftWidth + dx) * 100) / width;

      leftSide.style.width = newLeftWidth + '%';

      resize.style.cursor = 'col-resize';
      document.body.style.cursor = 'col-resize';

      leftSide.style.userSelect = 'none';
      leftSide.style.pointerEvents = 'none';

      rightSide.style.userSelect = 'none';
      rightSide.style.pointerEvents = 'none';
    };

    const mouseUpHandler = function () {
      resize.style.removeProperty('cursor');
      document.body.style.removeProperty('cursor');

      leftSide.style.removeProperty('user-select');
      leftSide.style.removeProperty('pointer-events');

      rightSide.style.removeProperty('user-select');
      rightSide.style.removeProperty('pointer-events');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
    resize.addEventListener('mousedown', mouseDownHandler);
  }
  onMenuSelect() {
    this.isMenuSelect = !this.isMenuSelect;
  }
}
