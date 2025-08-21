import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const paperFormats = [
    { name: 'A4', size: '210 × 297 мм', density: '80-300 г/м²', color: 'from-purple-500 to-pink-500' },
    { name: 'A3', size: '297 × 420 мм', density: '80-300 г/м²', color: 'from-blue-500 to-cyan-500' },
    { name: 'A5', size: '148 × 210 мм', density: '80-300 г/м²', color: 'from-green-500 to-emerald-500' },
    { name: 'A2', size: '420 × 594 мм', density: '80-250 г/м²', color: 'from-orange-500 to-red-500' },
  ];

  const services = [
    { 
      title: 'Индивидуальная резка', 
      description: 'Любой размер по вашим требованиям с точностью до миллиметра', 
      icon: 'Scissors',
      gradient: 'from-purple-600 to-pink-600'
    },
    { 
      title: 'Большие объёмы', 
      description: 'Оптовые поставки от 1000 листов с максимальной скидкой', 
      icon: 'Package',
      gradient: 'from-blue-600 to-cyan-600'
    },
    { 
      title: 'Быстрая доставка', 
      description: 'Доставка в день заказа по Москве и области', 
      icon: 'Truck',
      gradient: 'from-green-600 to-emerald-600'
    },
  ];

  const priceCategories = [
    { category: 'Офисная бумага', price: 'от 2₽/лист', density: '80 г/м²', icon: 'FileText' },
    { category: 'Плотная бумага', price: 'от 5₽/лист', density: '160-200 г/м²', icon: 'Layers' },
    { category: 'Картон', price: 'от 8₽/лист', density: '250-300 г/м²', icon: 'Square' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PAPER COMPANY
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium">Каталог</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium">О компании</a>
              <a href="#price" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium">Прайс</a>
              <a href="#contacts" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium">Контакты</a>
            </nav>
            <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-bg text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Качественная 
                  <span className="block gradient-text">бумага</span>
                  <span className="text-white/80 text-4xl lg:text-5xl block mt-2">любых форматов</span>
                </h2>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                  Широкий выбор бумаги различной плотности с возможностью индивидуальной резки под ваши задачи
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                  Рассчитать заказ
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/118d5b20-828f-4dfc-9b9c-cd8329a271ed.jpg" 
                alt="Производство бумаги" 
                className="relative rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Каталог <span className="gradient-text">продукции</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий формат и плотность из нашего широкого ассортимента
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {paperFormats.map((format, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-br ${format.color} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <Icon name="FileText" size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{format.name}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 font-medium">{format.size}</p>
                      <p className="text-sm text-gray-500">{format.density}</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white rounded-full">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl blur-3xl opacity-50"></div>
              <img 
                src="/img/04d45844-6f0b-45ed-a7b3-6ca3930ba5e3.jpg" 
                alt="Форматы бумаги" 
                className="relative rounded-3xl shadow-2xl mx-auto max-w-4xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Наши <span className="gradient-text">услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для вашего бизнеса с индивидуальным подходом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm group overflow-hidden">
                <CardContent className="p-8 text-center space-y-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon as any} size={40} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <Button variant="outline" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-6 py-2 transition-all duration-300">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  О <span className="gradient-text">компании</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Мы работаем на рынке бумажной продукции уже более 15 лет, предоставляя качественные 
                  материалы для офисов, типографий и частных заказчиков.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                  <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-600 font-medium">лет на рынке</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
                  <div className="text-4xl font-bold gradient-text mb-2">10k+</div>
                  <div className="text-gray-600 font-medium">довольных клиентов</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-600 font-medium">видов бумаги</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl">
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">поддержка</div>
                </div>
              </div>
            </div>
            <div>
              <Card className="card-hover border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 space-y-8">
                  <h3 className="text-3xl font-bold text-gray-900">Наши преимущества</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={24} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">Гарантия качества на всю продукцию</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={24} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">Индивидуальный подход к каждому заказу</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={24} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">Конкурентные цены без переплат</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={24} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">Быстрая обработка и доставка заказов</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Прайс-<span className="gradient-text">лист</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные цены на нашу продукцию с прозрачным ценообразованием
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {priceCategories.map((item, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center group overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{item.category}</h3>
                    <div className="text-4xl font-bold gradient-text">{item.price}</div>
                    <p className="text-gray-600">Плотность: {item.density}</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full py-3">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6">
            <p className="text-xl text-gray-600">Нужен индивидуальный расчёт?</p>
            <Button size="lg" className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Получить персональное предложение
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              <span className="gradient-text">Контакты</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Телефон</h3>
                  <p className="text-lg text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-lg text-gray-600">+7 (800) 123-45-67</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Email</h3>
                  <p className="text-lg text-gray-600">info@papercompany.ru</p>
                  <p className="text-lg text-gray-600">sales@papercompany.ru</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Адрес</h3>
                  <p className="text-lg text-gray-600">Москва, ул. Бумажная, 25</p>
                  <p className="text-lg text-gray-600">Пн-Пт: 9:00-18:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="card-hover border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">Оставить заявку</h3>
                  <p className="text-gray-600">Опишите ваши требования, и мы свяжемся с вами в течение часа</p>
                </div>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <textarea 
                    placeholder="Ваши требования к заказу" 
                    rows={4}
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Icon name="FileText" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">PAPER COMPANY</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Качественная бумага для всех ваших потребностей с доставкой по всей России
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Продукция</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">Офисная бумага</div>
                <div className="hover:text-white transition-colors cursor-pointer">Плотная бумага</div>
                <div className="hover:text-white transition-colors cursor-pointer">Картон</div>
                <div className="hover:text-white transition-colors cursor-pointer">Индивидуальная резка</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Услуги</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">Оптовые поставки</div>
                <div className="hover:text-white transition-colors cursor-pointer">Быстрая доставка</div>
                <div className="hover:text-white transition-colors cursor-pointer">Консультации</div>
                <div className="hover:text-white transition-colors cursor-pointer">Техподдержка</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white transition-colors">+7 (495) 123-45-67</div>
                <div className="hover:text-white transition-colors">info@papercompany.ru</div>
                <div className="hover:text-white transition-colors">Москва, ул. Бумажная, 25</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Paper Company. Все права защищены. Создано с ❤️ для вашего бизнеса.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;