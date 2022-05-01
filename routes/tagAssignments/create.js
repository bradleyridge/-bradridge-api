import * as TagAssignment from '../../lib/database/models/TagAssignment';
import * as Tag from '../../lib/database/models/Tag';
import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';

export const routePath = '/tag-assignments';
export const httpMethod = HTTP_METHODS.POST;
export const handle = async (ctx) => {

    const { errors, state } = TagAssignment.validate(ctx.request.body || {});
    if (errors.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);

    // verify tag exists
    const matchingTag = await Tag.getById(state.tag_id);
    if (!matchingTag) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Tag with id "${state.tag_id}" does not exist`);

    const matchingTagAssignments = await TagAssignment.get(state);
    if (matchingTagAssignments.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, 'Tag assignment already exists');

    const tagAssignment = await TagAssignment.create(state);

    if (!tagAssignment) {
        ctx.status = STATUS_CODES.ERROR;
        return ctx;
    }

    ctx.status = STATUS_CODES.CREATED;
    ctx.body = tagAssignment.toJSON();
    return ctx;

};
