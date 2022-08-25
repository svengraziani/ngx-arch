import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngxarch-prompt-delegate',
  templateUrl: './prompt-delegate.component.html',
  styleUrls: ['./prompt-delegate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromptDelegateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
