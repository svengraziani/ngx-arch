import { ChangeDetectionStrategy, Component } from '@angular/core';
import { logInfo, provideLogger, NGXA_LOG, logFatal, logError, logWarn, logTrace } from '@ngxarch/commons';
import { LogConsoleHandler } from './console-log-handler';
import { LogExampleService } from './log-example.service';
import { LOG_HANDLER } from './log-handler.token';
import { SnackbarLogHandler } from './snackbar-log-handler';

@Component({
  selector: 'ngxarch-basic-log-delegate',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGXA_LOG,
      useClass: LogExampleService
    },
    // Console logger
    {
      provide: LOG_HANDLER,
      useFactory: () => new LogConsoleHandler(),
      multi: true
    },
    // Snackbar logger
    {
      provide: LOG_HANDLER,
      useClass: SnackbarLogHandler,
      multi: true
    }
  ]
})
export class BasicComponent {

  // Provide the delegate logger, you could inject it in the constructor
  private readonly _logger = provideLogger();

  public testInfo() {
    logInfo('Info Button was clicked.', this._logger);
  }

  public testFatal() {
    logFatal('Fatal Error Button was clicked', this._logger);
  }

  public testError() {  
    logError('Error Button was clicked', this._logger);
  }

  public testWarn() { 
    logWarn('Warning Button was clicked', this._logger);
  }

  public testTrace() {
    logTrace('Trace Button was clicked', this._logger);
  }


}
