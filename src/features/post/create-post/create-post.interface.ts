import { Content } from 'src/domain/post/value-objects/content';

export class CreatePostInterface {
  title: string;
  content: string;
  user_uuid: string;

  constructor({
    title,
    content,
    user_uuid,
  }: {
    title: string;
    content: string;
    user_uuid: string;
  }) {
    this.title = title;
    this.content = new Content(content).getValue();
    this.user_uuid = user_uuid;
  }
}
