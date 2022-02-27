import { dateFromString, momentToString } from '../../../common/util';

class Blog {
  constructor(id, title, date, link, linkCaption, year, month, day) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.link = link;
    this.linkCaption = linkCaption;
    // deprecated
    this.year = year;
    this.month = month;
    this.day = day;
  }

  static fromDto({ _id: id, title, date, link, linkCaption, year, month, day }) {
    return new Blog(id, title, dateFromString(date), link, linkCaption, year, month, day);
  }

  update({ title, date, link, linkCaption }) {
    this.title = title;
    this.date = date;
    this.link = link;
    this.linkCaption = linkCaption;
  }

  toDto() {
    // TODO: fix problem with new date
    return {
      title: this.title,
      date: momentToString(this.date),
      link: this.link,
      linkCaption: this.linkCaption,
    };
  }
}

export default Blog;
