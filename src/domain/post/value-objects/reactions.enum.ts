import { ENUM } from 'src/domain/common/enum/enum';

export class Reaction extends ENUM {
  static ENUM = {
    LIKE: 'LIKE',
    LOVE: 'LOVE',
    HAHA: 'HAHA',
    WOW: 'WOW',
    SAD: 'SAD',
    ANGRY: 'ANGRY',
    CARE: 'CARE',
    SUPPORT: 'SUPPORT',
    THANKFUL: 'THANKFUL',
    PRIDE: 'PRIDE',
    DISLIKE: 'DISLIKE',
    NONE: 'NONE',
  };
}
