import { IHasNodeSamples } from './Types/IHasNodeSamples';
import { IHasDuration } from './Types/IHasDuration';
import { IHitObject } from './IHitObject';

/**
 * Use {@link IHasDuration} to differentiante 
 * between holdable object and other type of hit object.
 * Holdable objects are used only in osu!mania.
 * Creating this wasn't the best idea because it isn't robust 
 * at all and sometimes can't be applied to every ruleset.
 * This will be removed soon.
 * @deprecated
 */
export interface IHoldableObject extends IHitObject, IHasDuration, IHasNodeSamples {}
