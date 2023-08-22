/**
 * Union Types
 */

// Wrong
interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}

// Right
interface Momemt {
    utcOffset(): number;
    utcOffset(b: number | string): Momemt;
}

