import * as graphql from "@nestjs/graphql";
import { EventResolverBase } from "./base/event.resolver.base";
import { Event } from "./base/Event";
import { EventService } from "./event.service";
import { Public } from "../auth/public.decorator";
import { EventFindManyArgs } from "./base/EventFindManyArgs";
import { EventFindUniqueArgs } from "./base/EventFindUniqueArgs";
import { EventCountArgs } from "./base/EventCountArgs";
import { MetaQueryPayload } from "../util/MetaQueryPayload";

@graphql.Resolver(() => Event)
export class EventResolver extends EventResolverBase {
  constructor(protected readonly service: EventService) {
    super(service);
  }

  @Public()
  @graphql.Query(() => [Event])
  async events(@graphql.Args() args: EventFindManyArgs): Promise<Event[]> {
    return super.events(args);
  }

  @Public()
  @graphql.Query(() => Event, { nullable: true })
  async event(@graphql.Args() args: EventFindUniqueArgs): Promise<Event | null> {
    return super.event(args);
  }

  @Public()
  @graphql.Query(() => MetaQueryPayload, { name: "_eventsMeta" })
  async _eventsMeta(@graphql.Args() args: EventCountArgs): Promise<MetaQueryPayload> {
    return super._eventsMeta(args);
  }
}
