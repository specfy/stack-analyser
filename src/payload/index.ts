import type { Service, TechAnalyser } from '../types';
import type { AllowedKeys } from '../types/techs';

export class Payload {
  private services: Service[];
  private techs: Set<AllowedKeys>;

  constructor() {
    this.services = [];
    this.techs = new Set();
  }

  addService(service: Service) {
    const exist = this.services.find((s) => s.name === service.name);
    if (exist) {
      // TODO: merge
      return;
    }

    this.services.push(service);
    for (const tech of service.techs) {
      this.techs.add(tech);
    }

    if (service.tech) {
      this.techs.add(service.tech);
    }
  }

  addTech(tech: AllowedKeys) {
    this.techs.add(tech);
  }

  toJson(): TechAnalyser {
    return {
      services: this.services.map((service) => {
        return {
          name: service.name,
          path: service.path,
          tech: service.tech,
          edges: service.edges,
          techs: [...service.techs],
        };
      }),
      techs: [...this.techs],
    };
  }
}
