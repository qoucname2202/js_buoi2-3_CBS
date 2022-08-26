const buttons = document.querySelectorAll('.nav button');
buttons[0].children[0].innerHTML = '📖';
buttons.forEach((item, idx) => {
	item.addEventListener('click', e => {
		item.children[0].innerHTML = '📖';
		buttons.forEach((res, index) => {
			if (idx !== index) {
				res.children[0].innerHTML = '📒';
			}
		});
	});
});

// Bài 1: Tính lương nhân viên
document.getElementById('btnTinhLuong').addEventListener('click', e => {
	e.preventDefault();
	const priceOfDay = document.getElementById('price').value;
	const amountOfDay = document.getElementById('days').value;
	const result = document.querySelector('.showSalery');
	const formSalery = document.getElementById('myFormSalery');
	const saleryPrice = priceOfDay * amountOfDay;
	result.innerHTML = saleryPrice.toLocaleString('it-IT', {
		style: 'currency',
		currency: 'VND',
	});
	setTimeout(() => {
		formSalery.reset();
		result.innerText = '';
	}, 7000);
});
// Bài 2:  Tính giá trị trung bình
document.getElementById('btnTinhTB').addEventListener('click', e => {
	e.preventDefault();
	const numb1 = +document.getElementById('numb1').value;
	const numb2 = +document.getElementById('numb2').value;
	const numb3 = +document.getElementById('numb3').value;
	const numb4 = +document.getElementById('numb4').value;
	const numb5 = +document.getElementById('numb5').value;
	const showRes = document.querySelector('.showAverage');
	const myForm = document.getElementById('myFormTB');
	const sum = numb1 + numb2 + numb3 + numb4 + numb5;
	const averageNumb = sum / 5;
	showRes.innerText = averageNumb.toFixed(3);
	setTimeout(() => {
		myForm.reset();
		showRes.innerText = '';
	}, 7000);
});
// Bài 3: Quy đổi tiền
document.getElementById('btnQuyDoi').addEventListener('click', e => {
	e.preventDefault();
	const VND_MONEY = 23500;
	const dolar = +document.getElementById('dolar').value;
	const message = document.querySelector('.showMoneyChange');
	const changeMoney = dolar * VND_MONEY;
	message.innerText = changeMoney.toLocaleString('it-IT', {
		style: 'currency',
		currency: 'VND',
	});
	setTimeout(() => {
		document.getElementById('myFormMoney').reset();
		message.innerText = '';
	}, 7000);
});
// Bài 4: Tính chu vi và diện tích hình chữ nhật
document.getElementById('btnTinhHCN').addEventListener('click', e => {
	e.preventDefault();
	const width = +document.getElementById('width').value;
	const length = +document.getElementById('length').value;
	const myForm = document.getElementById('myFormHCN');
	const showRectangle = document.querySelector('.showInfoRectangle');
	if (width > length) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Chiều dài phải lớn hơn chiều rộng',
			showConfirmButton: false,
			timer: 2000,
		});
		myForm.reset();
		return;
	}
	const perimeter = (width + length) * 2;
	const area = width * length;
	showRectangle.innerText = `Diện tích: ${area} - Chu vi: ${perimeter}`;
	setTimeout(() => {
		myForm.reset();
		showRectangle.innerText = '';
	}, 7000);
});
// Bài 5: Tính tổng 2 ký số
document.getElementById('btnTinhTong').addEventListener('click', e => {
	e.preventDefault();
	const number = +document.getElementById('numbTwoDigit').value;
	const showTotalNumb = document.querySelector('.showTotalNumb');
	const myForm = document.getElementById('myFormTwoDigit');
	const tenths = Math.floor(number / 10);
	const units = number % 10;
	const total = tenths + units;
	showTotalNumb.innerText = total;
	setTimeout(() => {
		myForm.reset();
		showTotalNumb.innerText = '';
	}, 7000);
});
