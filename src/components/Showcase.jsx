import React from 'react';

const cards = [
  {
    id: 1,
    match: '70+',
    name: 'Nana',
    role: 'Mage Support',
    winrate: '72%',
    image: 'https://images.unsplash.com/photo-1634979149790-7e5f16db53d4?auto=format&fit=crop&w=400&q=80',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500'
  },
  {
    id: 2,
    match: '48',
    name: 'Ruby',
    role: 'Fighter Tank',
    winrate: '71%',
    image: 'https://images.unsplash.com/photo-1581804928342-4e3405e39c91?auto=format&fit=crop&w=400&q=80',
    gradient: 'from-green-400 via-teal-400 to-blue-500'
  },
  {
    id: 3,
    match: '30',
    name: 'Lylia',
    role: 'Mage',
    winrate: '68%',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
    gradient: 'from-orange-400 via-pink-500 to-rose-500'
  }
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {cards.map(card => (
          <div
            key={card.id}
            className={`relative overflow-hidden rounded-xl shadow-xl text-white bg-gradient-to-r ${card.gradient} flex flex-col md:flex-row items-center`}
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full md:w-1/3 h-48 md:h-64 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-6">
              <div className="text-center md:text-left">
                <p className="text-4xl font-extrabold leading-none">
                  {card.match}
                  <span className="text-base font-medium ml-1">MATCH</span>
                </p>
                <h3 className="text-3xl font-extrabold mt-2">{card.name}</h3>
                <p className="uppercase tracking-widest text-sm opacity-90">{card.role}</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-4xl font-extrabold">{card.winrate}</p>
                <p className="uppercase tracking-widest text-sm opacity-90">Winrate</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
