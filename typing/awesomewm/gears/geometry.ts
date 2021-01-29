import { Index, RealNumber, Direction, Geometry } from '../common';

export type GeometryModule = {
  readonly rectangle: {
    get_square_distance(geometry: Geometry, x: RealNumber, y: RealNumber): RealNumber;
    get_closest_by_coord(geometries: Geometry[], x: RealNumber, y: RealNumber): Index | null;
    get_by_coord(geometries: Geometry[], x: RealNumber, y: RealNumber): Index | null;
    get_in_direction(
      direction: Direction,
      alternatives: Geometry[],
      current: Geometry,
    ): Index | null;
    area_intersect_area(one: Geometry, other: Geometry): boolean;
    get_intersection(one: Geometry, other: Geometry): Geometry | null;
    area_remove(from: Geometry[], area: Geometry): Geometry[];
  };
};
