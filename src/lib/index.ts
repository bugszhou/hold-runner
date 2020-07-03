export const MODULE_NAME = "hold-runner";

interface IHoldRunner {
  startTime: number;
  duration: number;
  timer: any;
  isLock: boolean;
  start: () => any;
  end: () => any;
  clear: () => any;
}

interface IOpts {
  duration: number;
}

class HoldRunner implements IHoldRunner {
  startTime = 0;
  duration = 200;
  isLock = false;
  timer: any = -1;

  private customerDuration = 0;

  constructor(opts: IOpts) {
    this.duration = opts.duration;
  }

  public start(opts?: IOpts) {
    if (this.isLock) {
      return;
    }
    if (opts && opts.duration) {
      this.customerDuration = opts.duration;
    }
    this.isLock = true;
    this.startTime = Date.now();
  }

  public end() {
    try {
      if (this.timer !== -1 || !this.isLock) {
        return Promise.resolve(false);
      }
      const now = Date.now();
      const duration = this.customerDuration || this.duration;
      if (now - this.startTime > duration) {
        this.clear();
        return Promise.resolve(true);
      }
      return new Promise((resolve) => {
        this.timer = setTimeout(() => {
          this.clear();
          resolve(true);
          this.timer = -1;
        }, duration - now + this.startTime);
      });
    } catch (e) {
      console.error(e);
      this.clear();
      return Promise.resolve(true);
    }
  }

  public clear() {
    this.startTime = 0;
    this.duration = 200;
    this.customerDuration = 0;
    this.isLock = false;
    if (this.timer !== -1) {
      clearTimeout(this.timer);
      this.timer = -1;
    }
  }
}

export function createHoldRunner(opts?: IOpts) {
  return new HoldRunner({
    duration: 200,
    ...(opts || {}),
  });
}

export default HoldRunner;
