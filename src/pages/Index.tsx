import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const paperFormats = [
    { name: 'A4', size: '210 × 297 мм', density: '80-300 г/м²' },
    { name: 'A3', size: '297 × 420 мм', density: '80-300 г/м²' },
    { name: 'A5', size: '148 × 210 мм', density: '80-300 г/м²' },
    { name: 'A2', size: '420 × 594 мм', density: '80-250 г/м²' },
  ];

  const services = [
    { title: 'Индивидуальная резка', description: 'Любой размер по вашим требованиям', icon: 'Scissors' },
    { title: 'Большие объёмы', description: 'Оптовые поставки от 1000 листов', icon: 'Package' },
    { title: 'Быстрая доставка', description: 'Доставка в день заказа по Москве', icon: 'Truck' },
  ];

  const priceCategories = [
    { category: 'Офисная бумага', price: 'от 2₽/лист', density: '80 г/м²' },
    { category: 'Плотная бумага', price: 'от 5₽/лист', density: '160-200 г/м²' },
    { category: 'Картон', price: 'от 8₽/лист', density: '250-300 г/м²' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">PAPER COMPANY</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#price" className="text-gray-700 hover:text-primary transition-colors">Прайс</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">Связаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Качественная бумага<br />
                <span className="text-blue-200">любых форматов</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Широкий выбор бумаги различной плотности с возможностью индивидуальной резки под ваши задачи
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Рассчитать заказ
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="/img/118d5b20-828f-4dfc-9b9c-cd8329a271ed.jpg" 
                alt="Производство бумаги" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог продукции</h2>
            <p className="text-xl text-gray-600">Выберите подходящий формат и плотность</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {paperFormats.map((format, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Icon name="FileText" size={48} className="text-primary mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{format.name}</h3>
                  <p className="text-gray-600 mb-2">{format.size}</p>
                  <p className="text-sm text-gray-500">{format.density}</p>
                  <Button className="mt-4 w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img 
              src="/img/04d45844-6f0b-45ed-a7b3-6ca3930ba5e3.jpg" 
              alt="Форматы бумаги" 
              className="rounded-lg shadow-lg mx-auto max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг для вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Icon name={service.icon as any} size={64} className="text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button variant="outline">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы работаем на рынке бумажной продукции уже более 15 лет, предоставляя качественные 
                материалы для офисов, типографий и частных заказчиков.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">видов бумаги</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">поддержка</div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши преимущества</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon name="CheckCircle" size={24} className="text-green-500" />
                    <span>Гарантия качества на всю продукцию</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="CheckCircle" size={24} className="text-green-500" />
                    <span>Индивидуальный подход к каждому заказу</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="CheckCircle" size={24} className="text-green-500" />
                    <span>Конкурентные цены без переплат</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="CheckCircle" size={24} className="text-green-500" />
                    <span>Быстрая обработка и доставка заказов</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <p className="text-xl text-gray-600">Актуальные цены на нашу продукцию</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {priceCategories.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.category}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{item.price}</div>
                  <p className="text-gray-600 mb-6">Плотность: {item.density}</p>
                  <Button className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Нужен индивидуальный расчёт?</p>
            <Button size="lg">Получить персональное предложение</Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Телефон</h3>
                <p className="text-gray-600 mb-2">+7 (495) 123-45-67</p>
                <p className="text-gray-600">+7 (800) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600 mb-2">info@papercompany.ru</p>
                <p className="text-gray-600">sales@papercompany.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Адрес</h3>
                <p className="text-gray-600 mb-2">Москва, ул. Бумажная, 25</p>
                <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Оставить заявку</h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-md">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <textarea 
                  placeholder="Ваши требования к заказу" 
                  rows={3}
                  className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary max-w-md"
                />
                <Button className="mt-6 w-full max-w-md">Отправить заявку</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PAPER COMPANY</h3>
              <p className="text-gray-400">
                Качественная бумага для всех ваших потребностей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <div className="space-y-2 text-gray-400">
                <div>Офисная бумага</div>
                <div>Плотная бумага</div>
                <div>Картон</div>
                <div>Индивидуальная резка</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <div>Оптовые поставки</div>
                <div>Быстрая доставка</div>
                <div>Консультации</div>
                <div>Техподдержка</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@papercompany.ru</div>
                <div>Москва, ул. Бумажная, 25</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Paper Company. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;