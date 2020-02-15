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
	for i in range(500):
		# print(exp_values[i].shape)
		ans+=(np.var(exp_values[:,i]))
	ans/=500
	return ans
	

def main():
	datafile = open('./Q1_data/data.pkl',"rb");
	dataset = pickle.load(datafile)
	x=dataset[:,:-1]
	y=dataset[:,-1]
	y_dum=len(y)
	# print(y_dum)
	y=y.reshape(y_dum,1)
	x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=0.1,random_state=0)
	sz1=len(x_train)
	sz2=sz1/10
	sz2=int(sz2)
	x_test=x_test.reshape(len(x_test),1)
	x_train=x_train.reshape(len(x_train),1)
	y_test=y_test.reshape(len(y_test),1)
	y_train=y_train.reshape(len(y_train),1)
	x_train_subs=np.empty(shape=(10,sz2,1))
	y_train_subs=np.empty(shape=(10,sz2,1))
	for i in range(9):
		if(i==0):
		    y1=y_train
		    x12=x_train
		sz3=sz2/sz1
		# print(sz3,sz1)
		x22,x_train_subs[i],y2,y_train_subs[i]=train_test_split(x12,y1,test_size=sz3,random_state=0)
		sz1-=sz2
		y1=y2
		x12=x22
		# print(x12.shape,y1.shape)
	# print(x12.shape,y1.shape)
	# print(x12)
	x_train_subs[9]=x12
	y_train_subs[9]=y1
	reg=LinearRegression()
	bias_ar=np.empty(shape=(9,1))
	var_ar=np.empty(shape=(9,1))
	deg=np.empty(shape=(9,1))
	print("degree bias variance")
	for i in range(1,10):
		deg[i-1]=i
		print(i,end=" ")
		exp_values=np.empty(shape=(10,len(x_test),1))
		if(i>1):
			poly_fet = PolynomialFeatures(degree=i)
		for i1 in range(10):
			if(i==1):
				x_poly=x_train_subs[i1]
				x_tst=x_test
			else:
				x_poly=poly_fet.fit_transform(x_train_subs[i1])
				x_tst=poly_fet.fit_transform(x_test)
			reg.fit(x_poly,y_train_subs[i1])
			# print(reg.coef_)
			exp_values[i1]=reg.predict(x_tst)

		mean_bias_sq=bias(exp_values,y_test)
		mean_variance=variance(exp_values,y_test)
		bias_ar[i-1]=mean_bias_sq
		var_ar[i-1]=mean_variance
		print(mean_bias_sq,mean_variance)

	plt.plot(deg,bias_ar)
	plt.title("Bias^2 vs Degree")
	plt.xlabel("Degree of Polynomial")
	plt.ylabel("Bias^2")
	plt.show()

	plt.plot(deg,var_ar)
	plt.title("Variance vs Degree")
	plt.xlabel("Degree of Polynomial")
	plt.ylabel("Variance")
	plt.show()
	# plt.title("Bias")



if __name__ == '__main__':
	main()