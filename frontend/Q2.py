import numpy as np 
import pickle
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import PolynomialFeatures 
from matplotlib import pyplot as plt 

def bias(exp_values,y_test):
	ans=0.00
	for i in range(len(y_test)):
		temp=(y_test[i]-np.mean(exp_values[:,i]))
		temp*=temp
		ans+=temp
	ans/=len(y_test)
	return ans 

def variance(exp_values,y_test):
	ans=0.0
	for i in range(len(y_test)):
		# print(exp_values[i].shape)
		ans+=(np.var(exp_values[:,i]))
	ans/=len(y_test)
	return ans
	

def main():
	datax_train = open('./Q2_data/X_train.pkl',"rb");
	datay_train = open('./Q2_data/Y_train.pkl',"rb");
	datax_test = open('./Q2_data/X_test.pkl',"rb");
	datay_test = open('./Q2_data/Fx_test.pkl',"rb");
	
	x_train=pickle.load(datax_train)
	x_test = pickle.load(datax_test)
	x_test=x_test.reshape(len(x_test),1)
	y_train=pickle.load(datay_train)
	y_test=pickle.load(datay_test)
	y_test=y_test.reshape(len(y_test),1)

	reg=LinearRegression()
	bias_ar=np.empty(shape=(9,1))
	var_ar=np.empty(shape=(9,1))
	deg=np.empty(shape=(9,1))
	print("degree bias variance")
	samples=len(x_train[:,0])
	# print(samples)
	for i in range(1,10):
		deg[i-1]=i
		print(i,end=" ")
		exp_values=np.empty(shape=(samples,len(x_test),1))
		if(i>1):
			poly_fet = PolynomialFeatures(degree=i)
		for i1 in range(20):
			y1=y_train[i1].reshape(len(y_train[i1]),1)
			x1=x_train[i1].reshape(len(x_train[i1]),1)
			if(i==1):
				x_poly=x1
				x_tst=x_test
			else:
				x_poly=poly_fet.fit_transform(x1)
				x_tst=poly_fet.fit_transform(x_test)
			reg.fit(x_poly,y1)
			exp_values[i1]=reg.predict(x_tst)

		mean_bias_sq=bias(exp_values,y_test)
		mean_variance=variance(exp_values,y_test)
		bias_ar[i-1]=mean_bias_sq
		var_ar[i-1]=mean_variance
		print(mean_bias_sq,mean_variance)

	plt.plot(deg,bias_ar)
	plt.title("Bias Variance trade-off graph")
	# plt.xlabel("Degree of Polynomial")
	# plt.ylabel("Bias^2")
	# plt.show()

	plt.plot(deg,var_ar)
	# plt.title("Variance vs Degree")
	# plt.xlabel("Degree of Polynomial")
	# plt.ylabel("Variance")
	plt.show()
	# plt.title("Bias")



if __name__ == '__main__':
	main()