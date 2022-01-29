export type NoteMap = {
  title: string;
  text: string;
  favorited: boolean;
  lastUpdate: number;
};

export default class Note {
  id: string;
  title: string;
  text: string;
  favorited: boolean;
  lastUpdate: number;

  static createEmpty(): Note {
    return new Note(Date.now().toString(), "", "", false, new Date());
  }

  toMap(): NoteMap {
    return {
      title: this.title,
      text: this.text,
      favorited: this.favorited,
      lastUpdate: this.lastUpdate,
    } as NoteMap;
  }

  constructor(
    id: string,
    title: string,
    text: string,
    favorited: boolean,
    lastUpdate: Date
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.favorited = favorited;
    this.lastUpdate = lastUpdate.getTime();
  }
}
