export class Characher {
  constructor({
    char_id,
    name,
    birthday,
    occupation,
    img,
    status,
    nickname,
    appearance,
    portrayed,
    category,
    better_call_saul_appearance,
  }) {
    this.char_id = char_id;
    this.name = name;
    this.birthday = birthday;
    this.occupation = [...occupation];
    this.img = img;
    this.status = status;
    this.nickname = nickname;
    this.appearance = [...appearance];
    this.portrayed = portrayed;
    this.category = category;
    this.better_call_saul_appearance = [...better_call_saul_appearance];
  }
}
