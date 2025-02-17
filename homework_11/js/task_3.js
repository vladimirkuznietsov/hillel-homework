const covers = ['css\\img\\1.jpg',
                'css\\img\\2.jpg',
                'css\\img\\3.jpg',
                'css\\img\\4.jpg',
                'css\\img\\5.jpg',
                'css\\img\\6.jpg',
                'css\\img\\7.jpg',
                'css\\img\\8.jpg',
                'css\\img\\9.jpg',
                'css\\img\\10.jpg'
];

const imgBlock = document.getElementById('img');
const getCoverBtn = document.getElementById('btn');

const getIndex = () => {
    return Math.floor(Math.random() * 10);
};

getCoverBtn.addEventListener('click', () => {
    imgBlock.src = covers[getIndex()];
});
