import { RulesetBeatmap } from './RulesetBeatmap';
import { HitObject } from '../Objects/HitObject';
import { IBeatmap } from './IBeatmap';

/**
 * A beatmap converter.
 */
export abstract class BeatmapConverter {
  /**
   * Converts any beatmap from one game mode to another.
   * @param original Any kind of a beatmap.
   * @returns The converted beatmap.
   */
  convertBeatmap(original: IBeatmap): RulesetBeatmap {
    const converted = this.createBeatmap(original);

    for (const hitObject of this.convertHitObjects(converted.base)) {
      converted.hitObjects.push(hitObject);
    }

    converted.hitObjects.sort((a, b) => a.startTime - b.startTime);

    return converted;
  }

  abstract convertHitObjects(beatmap: IBeatmap): Generator<HitObject>;

  abstract createBeatmap(beatmap: IBeatmap): RulesetBeatmap;

  abstract canConvert(beatmap: IBeatmap): boolean;
}
