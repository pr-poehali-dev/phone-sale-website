import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedMemory, setSelectedMemory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const phones = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      brand: "Apple",
      price: 129990,
      memory: "256GB",
      camera: "48MP",
      screen: '6.1"',
      image: "/img/33f06a35-0eb6-4a9e-b0b7-e7a32c0d6207.jpg",
      isNew: true,
      discount: 0,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      price: 119990,
      memory: "512GB",
      camera: "200MP",
      screen: '6.8"',
      image: "/img/88201257-9bd4-405e-8515-20e1eab8a89a.jpg",
      isNew: false,
      discount: 15,
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      brand: "Google",
      price: 89990,
      memory: "128GB",
      camera: "50MP",
      screen: '6.7"',
      image: "/img/d7f54812-5dc5-41aa-9ceb-920742458fec.jpg",
      isNew: true,
      discount: 0,
    },
  ];

  const brands = [
    { name: "Apple", logo: "🍎" },
    { name: "Samsung", logo: "📱" },
    { name: "Google", logo: "🔵" },
    { name: "Xiaomi", logo: "🟠" },
  ];

  const filteredPhones = phones.filter((phone) => {
    const matchesPrice =
      phone.price >= priceRange[0] && phone.price <= priceRange[1];
    const matchesBrand =
      selectedBrand === "all" || phone.brand === selectedBrand;
    const matchesMemory =
      selectedMemory === "all" || phone.memory === selectedMemory;
    const matchesSearch = phone.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesPrice && matchesBrand && matchesMemory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Smartphone" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PHONE STORE
              </h1>
            </div>
            <nav className="flex space-x-8">
              <a
                href="#catalog"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#brands"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Бренды
              </a>
              <a
                href="#deals"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Акции
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Найдите свой идеальный
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              смартфон
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Лучшие цены на топовые модели с доставкой по всей России
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Search" size={20} className="mr-2" />
              Найти телефон
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Star" size={20} className="mr-2" />
              Популярные
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section id="catalog" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Каталог товаров
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Поиск</label>
              <Input
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Бренд</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите бренд" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все бренды</SelectItem>
                  <SelectItem value="Apple">Apple</SelectItem>
                  <SelectItem value="Samsung">Samsung</SelectItem>
                  <SelectItem value="Google">Google</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Память
              </label>
              <Select value={selectedMemory} onValueChange={setSelectedMemory}>
                <SelectTrigger>
                  <SelectValue placeholder="Объем памяти" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой объем</SelectItem>
                  <SelectItem value="128GB">128GB</SelectItem>
                  <SelectItem value="256GB">256GB</SelectItem>
                  <SelectItem value="512GB">512GB</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Цена: {priceRange[0].toLocaleString()} -{" "}
                {priceRange[1].toLocaleString()} ₽
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={200000}
                min={0}
                step={5000}
                className="w-full"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhones.map((phone) => (
              <Card
                key={phone.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="relative">
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {phone.isNew && (
                        <Badge className="bg-green-500 hover:bg-green-600">
                          NEW
                        </Badge>
                      )}
                      {phone.discount > 0 && (
                        <Badge className="bg-red-500 hover:bg-red-600">
                          -{phone.discount}%
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <CardTitle className="text-lg">{phone.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {phone.brand}
                    </CardDescription>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="HardDrive" size={16} />
                      <span>{phone.memory}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Camera" size={16} />
                      <span>{phone.camera}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Monitor" size={16} />
                      <span>{phone.screen}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      {phone.discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                          {phone.price.toLocaleString()} ₽
                        </span>
                      )}
                      <span className="text-2xl font-bold text-gray-900">
                        {phone.discount > 0
                          ? Math.round(
                              phone.price * (1 - phone.discount / 100),
                            ).toLocaleString()
                          : phone.price.toLocaleString()}{" "}
                        ₽
                      </span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Популярные бренды
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <Card
                key={brand.name}
                className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{brand.logo}</div>
                  <h4 className="text-xl font-semibold">{brand.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section
        id="deals"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Горячие предложения
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Скидки до 30% на популярные модели
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Zap"
                  size={48}
                  className="mx-auto mb-4 text-yellow-500"
                />
                <h4 className="text-xl font-bold mb-2">
                  Молниеносная доставка
                </h4>
                <p className="text-gray-600">Доставим в течение 2 часов</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Shield"
                  size={48}
                  className="mx-auto mb-4 text-green-500"
                />
                <h4 className="text-xl font-bold mb-2">Гарантия качества</h4>
                <p className="text-gray-600">Официальная гарантия 2 года</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon
                  name="CreditCard"
                  size={48}
                  className="mx-auto mb-4 text-blue-500"
                />
                <h4 className="text-xl font-bold mb-2">Рассрочка 0%</h4>
                <p className="text-gray-600">Без переплат до 12 месяцев</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">PHONE STORE</h4>
              <p className="text-gray-400">
                Лучшие смартфоны по доступным ценам
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>iPhone</li>
                <li>Samsung</li>
                <li>Google Pixel</li>
                <li>Xiaomi</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Доставка</li>
                <li>Гарантия</li>
                <li>Возврат</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@phonestore.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Phone Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
