import { MooBaseEntity } from 'src/commons/base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('posts')
export class PostEntity extends MooBaseEntity {
  @Column({ length: 240, nullable: true })
  text: string;

  @Column('json', { default: [] })
  images: Array<string>;

  @Column({ name: 'like_count', default: 0 })
  likeCount: number;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;

  @Column('json', { default: [] })
  hashtags: Array<string>;

  @Column('json', { default: [] })
  mentions: Array<Mention>;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'orig_post_id' })
  origPost: PostEntity;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'reply_to_id' })
  replyTo: PostEntity;
}

class Mention {
  name: string;
  id: string;
}
