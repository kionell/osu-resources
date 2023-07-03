import { ControlPointType } from '../Enums/ControlPointType';
import { ControlPoint } from './ControlPoint';
import { SampleSet, HitSample } from '../../Audio';

/**
 * A sample point.
 */
export class SamplePoint extends ControlPoint {
  /**
   * The default instance of a sample point.
   */
  static readonly DEFAULT = new SamplePoint();

  /**
   * The default instance of a sample point.
   * Use {@link DEFAULT} instead.
   * @deprecated Since 3.1.0
   */
  static get default(): SamplePoint {
    return SamplePoint.DEFAULT;
  }

  /**
   * The type of a sample point.
   */
  pointType = ControlPointType.SamplePoint;

  /**
   * The sample bank of this sample point.
   */
  sampleSet: string = SampleSet[SampleSet.Normal];

  /**
   * The custom index of this sample point.
   */
  customIndex = 0;

  /**
   * The volume of this sample point.
   */
  volume = 100;

  /**
   * Checks if this sample point is redundant to an another one.
   * @param existing The another sample point.
   * @returns Whether the sample point is redundant.
   */
  isRedundant(existing: SamplePoint): boolean {
    return (
      existing !== null
        && this.volume === existing.volume
        && this.customIndex === existing.customIndex
        && this.sampleSet === existing.sampleSet
    );
  }

  /**
   * @param other Other sample control point.
   * @returns If two sample control points are equal.
   */
  equals(other: SamplePoint): boolean {
    return other instanceof SamplePoint
      && this.volume === other.volume
      && this.customIndex === other.customIndex
      && this.sampleSet === other.sampleSet;
  }
}
