/**
 * Total Minutes in a Day
 */
const DAY_MINUTES: number = 1440;
const HOUR_MINUTES: number = 60;

export class Clock {
  private minutes: number = 0;

  private normalizeMinutes(minutes: number): number {
    if (minutes < 0) {
      return DAY_MINUTES + ~~(minutes % DAY_MINUTES);
    } else if (minutes >= DAY_MINUTES) {
      return ~~(minutes % DAY_MINUTES);
    }
    return minutes;
  }

  constructor(hour: number, minute: number = 0) {
    this.minutes = this.normalizeMinutes(hour * HOUR_MINUTES + minute);
  }

  public toString() {
    const hours = ~~(this.minutes / HOUR_MINUTES);
    const minutes = ~~(this.minutes % HOUR_MINUTES);
    return (
      String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')
    );
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.minutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.minutes === other.minutes;
  }
}

const clock = new Clock(50, 12);
console.log('clock', clock.minus(12));
