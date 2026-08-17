import { brandConfig, contactChannels } from "@/lib/data";

export const metadata = {
  title: "Контакти",
  description: "Прямий email і GitHub для старту нового сайту з Myshchyshyn."
};

export default function ContactsPage() {
  return (
    <section className="section-block contact-section contact-first-screen" aria-labelledby="channels-title">
      <div className="contact-fold">
        <div className="contact-copy reveal-up">
          <p className="hero-kicker">Контакти · прямий старт</p>
          <h2 id="channels-title">Прямі канали</h2>
          <p>Найшвидше почати з короткого email: задача, 2-3 референси й сторінки, які точно потрібні на першому запуску.</p>
          <div className="channel-list">
            {contactChannels.map((channel) => (
              <a className={`channel-card ${channel.type}`} href={channel.href} key={channel.type} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noreferrer" : undefined}>
                <span>{channel.eyebrow}</span>
                <strong>{channel.title}</strong>
                <p>{channel.text}</p>
              </a>
            ))}
          </div>
        </div>
        <form className="brief-panel brief-form reveal-up" action={`mailto:${brandConfig.email}`} method="post" encType="text/plain">
          <h3>Бриф на старт</h3>
          <label>
            <span>Як вас звати *</span>
            <input name="name" type="text" placeholder="Ім'я або компанія" />
          </label>
          <label>
            <span>Канал для зв'язку *</span>
            <input name="contact" type="text" placeholder="email або посилання" />
          </label>
          <label>
            <span>Тип сайту</span>
            <select name="project_type" defaultValue="">
              <option value="">— Оберіть формат</option>
              <option>Портфоліо</option>
              <option>Лендинг</option>
              <option>Каталог / e-commerce</option>
              <option>Сайт-кейс</option>
            </select>
          </label>
          <label>
            <span>Що потрібно зробити *</span>
            <textarea name="message" placeholder="Наприклад: потрібен сайт-портфоліо з 5 кейсами, сторінкою контактів і адаптацією під mobile." />
          </label>
          <div className="budget-group" aria-label="Орієнтовний бюджет">
            <span>Орієнтовний бюджет</span>
            <div>
              <button type="button">до $500</button>
              <button type="button">$500-1000</button>
              <button type="button">$1000-5000</button>
              <button type="button">$5000+</button>
            </div>
          </div>
          <button className="primary-link brief-submit" type="submit">
            Надіслати email
          </button>
        </form>
      </div>
    </section>
  );
}
